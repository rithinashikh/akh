
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import '../../styles/advocates/payment.css'

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    // Extracting query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const paymentStatus = queryParams.get('payment_status');
    const paymentRequestId = queryParams.get('payment_request_id');
    const paymentId = queryParams.get('payment_id');

    // Making API call with extracted parameters
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`association/Paymentsucessfull/${paymentId}/${paymentRequestId}`);
        setApiResponse(response.data.message); // Assuming the API response has a 'message' field   
      } catch (error) {
        setApiResponse('An error occurred while processing the payment.');
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <i className="fas fa-check-circle success-icon"></i>
        {/* <h1 className="success-heading">Payment Successful!</h1> */}
        <p className="success-message">
          Your payment status
        </p>
        {apiResponse && (
          <p className="api-response-message" style={{ color: 'green' }}>
            {apiResponse}
          </p>
        )}
        <button className="continue-shopping-button" onClick={() => navigate('/advocate/layout')}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;