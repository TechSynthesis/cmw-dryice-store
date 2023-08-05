import { Router } from "express";
import CcavenuePaymentProcessor from "services/ccavenue-payment-processor";
const ccavService = require("./ccavenueService");

export default (rootDirectory: string): Router | Router[] => {
  // add your custom routes here
  const storeRouter = Router();

  storeRouter.post("/api/handle-response", async (req, res) => {
    const { encResp } = req.body;
    const orderService = req.scope.resolve("orderService");
    // const cartId = req.body.payload.payment.entity.notes.cart_id;
    const cartId = ccavService.decrypt(encResp).order_id;
    //maybe use this bottom one instead
    const decryptedJsonResponse = ccavService.redirectResponseToJson(encResp);

    const order = await orderService
      .retrieveByCartId(decryptedJsonResponse.order_id)
      .catch(() => undefined);
    const paymentStatus = decryptedJsonResponse.order_status;

    if (paymentStatus === "Success") {
      orderService.capturePayment(order.id);
      res.redirect(`${process.env.STORE_CORS}/order/confirmed/${order.id}`);
    } else {
      res.redirect("/api/payment-failure");
      return res.sendStatus(404);
    }
  });

  storeRouter.post("/payment/cancel", async (req, res) => {
    // Similar to the success route, but handle a cancelled payment
  });

  return [];
};
