import { Component } from '@angular/core';

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

  subscribe(plan: string) {
    console.log(`Subscribing to ${plan} plan`);
  
  }
}
