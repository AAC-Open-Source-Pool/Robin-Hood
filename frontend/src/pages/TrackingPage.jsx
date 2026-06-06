import { Link } from "react-router-dom";

const TrackingPage = () => {
  return (
    <>
     
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            color: #333;
            margin: 0;
            padding: 0;
          }

          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
          }

          .header h1 {
            font-size: 2.5rem;
            color: #800000; /* Maroon */
            margin-bottom: 20px;
          }

          .order-status h2 {
            font-size: 1.8rem;
            margin-bottom: 10px;
          }

          .order-status h3 {
            font-size: 1.4rem;
            margin-bottom: 30px;
            color: #666;
          }

          .status-steps {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-bottom: 40px;
          }

          .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 10px;
            width: 150px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }

          .icon-box {
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: #800000; /* Maroon */
          }

          .step p {
            font-size: 1rem;
            margin: 0;
            line-height: 1.4;
            color: #333;
          }

          .step p a {
            color: #800000;
            text-decoration: underline;
          }

          .footer {
            margin-top: 30px;
            padding: 10px 0;
            background-color: #f5f5f5;
            border-radius: 10px;
          }

          .footer p {
            margin: 5px 0;
            font-size: 1.1rem;
          }
        `}
      </style>

      <div className="container">

        <div className="header">
          <h1>Robin Hood</h1>
        </div>

        <div className="order-status">
          <h2>Order has been placed.</h2>
          <h3>Track your order</h3>

          <div className="status-steps">
            <div className="step">
              <div className="icon-box">📦</div>
              <p>Order has been packed</p>
            </div>
            <div className="step">
              <div className="icon-box">🚚</div>
              <p>Shipped</p>
            </div>
            <div className="step">
              <div className="icon-box">📤</div>
              <p>
                Product received by the NGO{" "}
                <Link to="/ngo-details">View details about this NGO</Link>
              </p>
            </div>
            <div className="step">
              <div className="icon-box">❤️</div>
              <p>Supplied to the needy</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Thank you for supporting us!!!</p>
          <p>We seek your constant support and love!</p>
        </div>
      </div>
    </>
  );
};

export default TrackingPage;
