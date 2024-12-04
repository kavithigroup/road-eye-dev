import {Component} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {loadStripe} from '@stripe/stripe-js';

// import * as CryptoJS from 'crypto-js';


interface SubscriptionPlan {
  name: string;
  price: string;
  features: string[];
  duration: string;
  popular?: boolean;
  price_id?: string
  value?: number
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.sass']
})
export class SubscriptionComponent {


  subscriptionPlans: SubscriptionPlan[] = [
    {
      name: 'Free',
      price: 'FREE',
      features: [
        'First Three Months Only',
        '20 Tokens',
        '20 Searches',
        'No priority support'
      ],
      duration: '1 month'
    },
    {
      name: 'Gold',
      price: '3,000.00 LKR/month',
      features: [
        'Up to 100 Searches',
        '100 Tokens',
        '100 Searches',
        'Email support'
      ],
      duration: '3 months',
      popular: true,
      price_id: "price_1QS4KMC3Jv8Pj3OftWTslIbl",
      value: 3000
    },
    {
      name: 'Platinum',
      price: '10,000.00 LKR/month',
      features: [
        'Unlimited Searches',
        'Unlimited Tokens',
        'Unlimited Searches',
        '24/7 support'
      ],
      price_id: "price_1QS4LEC3Jv8Pj3OfVToMXjdK",
      duration: '5 months',
      value: 10000
    }
  ];

  // subscribe(plan: string) {
  //   console.log(`Subscribing to ${plan} plan`);
  //
  // }

  constructor(private api: ApiService) {
  }

  stripePromise = loadStripe('pk_test_51Nx6nOC3Jv8Pj3OfnPLyr1azi6BiZJpHepUdvnY7wm2VQbA48IOmEOa7co8A98XYGg79Tz65sTwQxLMoZWUAsf1U00M9XOmIX7');

   onPaymentClick(plan: SubscriptionPlan) {
    this.api.post("/payment/done", plan).subscribe(async r => {
      const stripe = await this.stripePromise;
      stripe?.redirectToCheckout({
        lineItems: [{price: plan?.price_id, quantity: 1}],
        mode: 'payment',
        successUrl: 'http://localhost:4200/success',
        cancelUrl: 'http://localhost:4200/cancel',
      });
    })
  }
}
