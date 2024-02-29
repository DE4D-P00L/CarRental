import { useParams, Link } from "react-router-dom";

const PaymentVerification = () => {
  const { pid } = useParams();
  return (
    <div className="grid place-content-center min-h-[calc(100dvh-60px)] text-center space-y-3">
      <h2 className="text-5xl font-bold">Order Successful</h2>
      <p className="font-semibold">Reference number: {pid}</p>
      <Link to="/history" className="underline underline-offset-2">
        Check order history
      </Link>
    </div>
  );
};
export default PaymentVerification;
