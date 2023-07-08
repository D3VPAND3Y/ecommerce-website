import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button from '../button/button.component';
import styles from './payment-form-styles.scss';
import { useContext } from 'react';
import { UsersContext } from '../contexts/users.context';
import { CartContext } from '../contexts/cart.context';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
    const {cartItems} = useContext(CartContext);
    // console.log(cartItems);
    const {currentUser} = useContext(UsersContext);
    // console.log(currentUser);

    const user = currentUser;

    const total = cartItems.reduce((acc,cartItem) => acc + cartItem.price * cartItem.quantity,0);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount:  total * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
            name: user ? currentUser.email : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');

      }
    }
  };
  return (
    <form className={styles.PaymentFormContainer} onSubmit={paymentHandler}>
      <div className={styles.FormContainer}>
        <h2>Credit Card Payment:</h2>
        <CardElement className="credit-card-detail"/>
      </div>

      <Button
        isLoading={isProcessingPayment}
      >
        {' '}
        Pay Now{' '}
      </Button>
    </form>
  );
};

export default PaymentForm;