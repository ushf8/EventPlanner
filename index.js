class EventPlanner {
  constructor() {
    this.eventName = '';
    this.invitations = [];
    this.rsvps = [];
    this.venue = '';
    this.budget = 0;
  }

  setEventName(eventName) {
    this.eventName = eventName;
  }

  addInvitation(invitation) {
    this.invitations.push(invitation);
  }

  removeInvitation(invitation) {
    const index = this.invitations.indexOf(invitation);
    if (index !== -1) {
      this.invitations.splice(index, 1);
    }
  }

  sendInvitations() {
    // Code to send invitations to all recipients
    console.log('Invitations sent successfully!');
  }

  addRsvp(rsvp) {
    this.rsvps.push(rsvp);
  }

  removeRsvp(rsvp) {
    const index = this.rsvps.indexOf(rsvp);
    if (index !== -1) {
      this.rsvps.splice(index, 1);
    }
  }

  selectVenue(venue) {
    this.venue = venue;
  }

  setBudget(budget) {
    this.budget = budget;
  }

  trackBudgetExpense(expense) {
    // Code to track and update the budget based on the expense
    this.budget -= expense;
  }
}

// Usage example:

const myEventPlanner = new EventPlanner();
myEventPlanner.setEventName('Birthday Party');
myEventPlanner.addInvitation('John');
myEventPlanner.addInvitation('Jane');
myEventPlanner.sendInvitations();
myEventPlanner.addRsvp('John');
myEventPlanner.addRsvp('Jane');
myEventPlanner.selectVenue('Park');
myEventPlanner.setBudget(500);
myEventPlanner.trackBudgetExpense(100);

console.log(myEventPlanner);
