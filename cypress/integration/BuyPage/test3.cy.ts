///<reference types="cypress"/>
import { Dependencies, RobotEyes, RobotHands } from "../../robots/BuyPage/basic.cy";

context("Search Header", () => {

    const dependencies = new Dependencies();
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();


    
    describe("Buy Page Testing", () => {

        it("Setting view port",() => {
            dependencies.setViewport();
            
        });
    it("Visiting the Buy page",()=>{
        
        dependencies.accessUrl('http://3.12.169.245:3000/buy');
        robotHands.wait(7000)
    });
    it("Checking Sell Page URL",()=>{


        robotEyes.checkBuyPageUrl();
        
    });
    it("Checking for Checkout", () => {
        robotEyes.getElementWithText("Checkout").should("be.visible");
    });

    it("Checking for Sell Crypto", () => {
        robotEyes.getElementWithText("Buy Crypto").should("be.visible");
    });

    it("Checking for Choosing the Crypto to be sold", () => {
        robotEyes.getElementWithText("Choose crypto").should("be.visible");
    });

    it("Checking if all the cryptos are available ", () => {
        robotEyes.getElementWithText("Bitcoin").should("be.visible");
        robotEyes.getElementWithText("Ethereum").should("be.visible");
        robotEyes.getElementWithText("Binance").should("be.visible");
        robotEyes.getElementWithText("Tether").should("be.visible");
        robotEyes.getElementWithText("XRP").should("be.visible");
        robotEyes.getElementWithText("Dogecoin").should("be.visible");
        robotEyes.getElementWithText("Cardano").should("be.visible");
        robotEyes.getElementWithText("Polkadot").should("be.visible");

    });

    it("Checking for Payment Method", () => {
        robotEyes.getElementWithText("Payment Method").should("be.visible");
    });

    it("Checking for Amount Details", () => {
        robotEyes.getElementWithText("Amount details").should("be.visible");
    });

    it("Checking for Sell Max Button", () => {
        robotEyes.getElementWithText('Buy max').click();
    });

    it("Checking for Buying Summary", () => {
        robotEyes.getElementWithText("Payment method").should("be.visible");
        robotEyes.getElementWithText("Delivery fees").should("be.visible");
        robotEyes.getElementWithText("Deposit to").should("be.visible");
        robotEyes.getElementWithText("Total").should("be.visible");
    });

   
    it("Checking the link from Buy page  to Success  page after buying", () => {

        robotEyes.getElementWithText("BUY NOW").click();
        robotEyes.seesPathNameInUrl("/success");
    })
    






    });
});