import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../constant/path";

const PaymentReceipt = () => {
  const location = useLocation();

  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return {
      payment_id: searchParams.get("payment_id"),
      mobile: searchParams.get("mobile_number"),
    };
  };

  const getApi = async (payment_id, mobile) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${API_BASE_URL}customer/service_provider/generate-payment-slip`,
        data: { payment_id, mobile_number: mobile },
        responseType: "blob", // Important: tells axios to treat response as binary
      });

      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `payment_receipt_${payment_id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(pdfUrl); // Cleanup
    } catch (error) {
      console.log("API error:", error);
    }
  };

  useEffect(() => {
    const { payment_id, mobile } = getQueryParams();
    if (payment_id && mobile) {
      getApi(payment_id, mobile);
    } else {
      console.log("Missing payment_id or mobile_number in URL params");
    }
  }, [location.search]);

  return <></>;
};

export default PaymentReceipt;
