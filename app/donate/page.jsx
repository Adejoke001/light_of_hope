'use client';
import React, { useState } from 'react';
import styles from './donate.modules.css'

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    nameOnCard: ''
  });

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setDonationAmount(value);
  };

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'donor') {
      setDonorInfo({ ...donorInfo, [name]: value });
    } else {
      setPaymentInfo({ ...paymentInfo, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process donation logic here
    console.log({
      amount: donationAmount,
      isRecurring,
      donorInfo,
      paymentInfo
    });
    alert('Thank you for your donation!');
  };

  return (
    <div className="donation-page">
      <div className="donation-hero mt-10">
        <h1 className=' text-xl'>Make a Difference Today</h1>
        <p>Your donation helps us continue our mission to create positive change in our community.</p>
      </div>

      <div className="donation-container">
        <div className="donation-form-container">
          <h2>Donation Details</h2>
          
          <form onSubmit={handleSubmit} className="donation-form">
            <div className="donation-amount-section">
              <h3>Select Amount (USD)</h3>
              <div className="amount-options">
                {presetAmounts.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    className={`amount-option ${donationAmount === amount.toString() ? 'selected' : ''}`}
                    onClick={() => handleAmountSelect(amount.toString())}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="custom-amount">
                <label htmlFor="customAmount">Or enter custom amount:</label>
                <input
                  type="number"
                  id="customAmount"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  placeholder="$ Other amount"
                />
              </div>
              
              <div className="recurring-donation">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={() => setIsRecurring(!isRecurring)}
                  />
                  <span>Make this a monthly recurring donation</span>
                </label>
              </div>
            </div>

            <div className="donor-info-section">
              <h3>Your Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={donorInfo.name}
                    onChange={(e) => handleInputChange(e, 'donor')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={donorInfo.email}
                    onChange={(e) => handleInputChange(e, 'donor')}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={donorInfo.phone}
                    onChange={(e) => handleInputChange(e, 'donor')}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={donorInfo.address}
                  onChange={(e) => handleInputChange(e, 'donor')}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={donorInfo.city}
                    onChange={(e) => handleInputChange(e, 'donor')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">ZIP Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={donorInfo.zip}
                    onChange={(e) => handleInputChange(e, 'donor')}
                  />
                </div>
              </div>
            </div>

            <div className="payment-info-section">
              <h3>Payment Information</h3>
              <div className="form-group">
                <label htmlFor="nameOnCard">Name on Card</label>
                <input
                  type="text"
                  id="nameOnCard"
                  name="nameOnCard"
                  value={paymentInfo.nameOnCard}
                  onChange={(e) => handleInputChange(e, 'payment')}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={(e) => handleInputChange(e, 'payment')}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiration Date</label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    value={paymentInfo.expiry}
                    onChange={(e) => handleInputChange(e, 'payment')}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">Security Code</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={paymentInfo.cvv}
                    onChange={(e) => handleInputChange(e, 'payment')}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="security-badges">
              <div className="security-item">
                <i className="lock-icon">🔒</i>
                <span>Secure Encryption</span>
              </div>
              <div className="security-item">
                <i className="shield-icon">🛡️</i>
                <span>PCI Compliant</span>
              </div>
            </div>

            <button 
              type="submit" 
              className="donate-button mb-10"
              disabled={!donationAmount}
            >
              {isRecurring ? 'Donate Monthly' : 'Donate Now'} ${donationAmount}
            </button>
          </form>
        </div>

        <div className="donation-sidebar">
          <div className="impact-box">
            <h3>Your Impact</h3>
            <ul>
              <li>$25 provides meals for 10 people</li>
              <li>$50 supplies educational materials for 5 children</li>
              <li>$100 provides medical supplies for a family</li>
            </ul>
          </div>
          
          <div className="trust-box">
            <h3>Why Donate?</h3>
            <p>Your donation directly supports our programs and initiatives. We are transparent about how funds are allocated.</p>
            <a href="/financials">View our financial reports →</a>
          </div>
          
          <div className="contact-box">
            <h3>Other Ways to Give</h3>
            <p>Prefer to donate by mail or phone?</p>
            <p>Call: (123) 456-7890</p>
            <p>Mail: Light of Hope, 123 Adam's street, Winston city.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;