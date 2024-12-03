import {Component} from '@angular/core';
import {ApiService} from "../../../services/api.service";

// import * as CryptoJS from 'crypto-js';


interface SubscriptionPlan {
  name: string;
  price: string;
  features: string[];
  duration: string;
  popular?: boolean;
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
      price: '$10/month',
      features: [
        'Up to 100 Searches',
        '100 Tokens',
        '100 Searches',
        'Email support'
      ],
      duration: '3 months',
      popular: true
    },
    {
      name: 'Platinum',
      price: '$50/month',
      features: [
        'Unlimited Searches',
        'Unlimited Tokens',
        'Unlimited Searches',
        '24/7 support'
      ],
      duration: '5 months'
    }
  ];

  // subscribe(plan: string) {
  //   console.log(`Subscribing to ${plan} plan`);
  //
  // }

  constructor(private api: ApiService) {
  }

  onPaymentClick() {
    this.api.post("/payment").subscribe(httpResponse => {
      let obj = httpResponse.body
      // @ts-ignore
      let payhere: any = window.payhere;
      // @ts-ignore
      payhere.onCompleted = function onCompleted(orderId) {
        console.log("Payment completed. OrderID:" + orderId);
        // Note: validate the payment and show success or failure page to the customer
      };

      // Payment window closed
      payhere.onDismissed = function onDismissed() {
        // Note: Prompt user to pay again or show an error page
        console.log("Payment dismissed");
      };

      // Error occurred
      // @ts-ignore
      payhere.onError = function onError(error) {
        // Note: show an error page
        console.log("Error:" + error);
      };
      console.log(obj);
      // Put the payment variables here
      // var payment = {
      //   "sandbox": true,
      //   "merchant_id": obj["merchant_id"], // Replace your Merchant ID
      //   "return_url": obj['return_url'], // Important
      //   "cancel_url": obj['cancel_url'], // Important
      //   "notify_url": undefined,
      //   "order_id": obj["order_id"],
      //   "items": 'topup',
      //   "amount": obj["amount"],
      //   "currency": obj["currency"],
      //   "hash": obj['hash'], // *Replace with generated hash retrieved from backend
      //   "first_name": obj["first_name"],
      //   "last_name": obj["last_name"],
      //   "email": obj["email"],
      //   "phone": obj["phone"],
      //   "address": obj["address"],
      //   "city": obj["city"],
      //   "country": "Sri Lanka",
      // };
      // obj["return_url"] = undefined
      // obj["cancel_url"] = undefined
      payhere.startPayment(obj);
    })
  }
}
