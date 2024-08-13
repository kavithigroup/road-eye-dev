import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SubscriptionPlan {
  name: string;
  price: number;
  duration: string;
  tokensPerMonth: number;
  searchesPerMonth: number;
}

@Component({
  selector: 'app-company-subscription',
  templateUrl: './company-subscription.component.html',
  styleUrls: ['./company-subscription.component.sass']
})
export class CompanySubscriptionComponent implements OnInit {
  currentPlan: SubscriptionPlan | undefined;
  remainingTokens: number | undefined;
  remainingDays: number | undefined;

  // Dummy data
  dummyPlans: SubscriptionPlan[] = [
    {
      name: 'Free',
      price: 0,
      duration: 'month',
      tokensPerMonth: 20,
      searchesPerMonth: 20
    },
    {
      name: 'Gold',
      price: 10,
      duration: 'month',
      tokensPerMonth: 100,
      searchesPerMonth: 100
    },
    {
      name: 'Platinum',
      price: 50,
      duration: 'month',
      tokensPerMonth: 500,
      searchesPerMonth: 500
    }
  ];

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.getSubscriptionDetails();
  }

  getSubscriptionDetails() {
    // Simulating API call with dummy data
    setTimeout(() => {
      this.currentPlan = this.dummyPlans[1]; // Assuming the company has a Gold plan
      this.remainingTokens = 73; // Random number for remaining tokens
      this.remainingDays = 18; // Random number for remaining days
    }, 500); // Simulate a 500ms delay
  }

  updateSubscription() {
    console.log('Updating subscription...');
    this.router.navigate(['/all-subscriptions']);
  }

  unsubscribe() {
    if (confirm('Are you sure you want to unsubscribe?')) {
      console.log('Unsubscribing...');
      setTimeout(() => {
        this.currentPlan = this.dummyPlans[0]; // Set to Free plan
        this.remainingTokens = 20;
        this.remainingDays = 30;
        alert('You have been unsubscribed. Your plan is now set to Free.');
      }, 1000); // Simulate a 1s delay
    }
  }
}