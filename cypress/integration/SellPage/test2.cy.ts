///<reference types="cypress"/>
import { Dependencies, RobotEyes, RobotHands } from "../../robots/SellPage/basic.cy";

context("Search Header", () => {

    const dependencies = new Dependencies();
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();


    
    describe("Sell Page Testing", () => {

        it("Setting view port",() => {
            dependencies.setViewport();
            
        });
    it("Visiting the Sell page",()=>{
        
        dependencies.accessUrl('http://3.12.169.245:3000/sell');
        robotHands.wait(7000)
    });
    it("Checking Sell Page URL",()=>{


        robotEyes.checkSellPageUrl();
        
    });
    it("Checking for Checkout", () => {
        robotEyes.getElementWithText("Checkout").should("be.visible");
    });

    it("Checking for Sell Crypto", () => {
        robotEyes.getElementWithText("Sell Crypto").should("be.visible");
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

    it("Checking for Total Balance", () => {
        robotEyes.getElementWithText("Total Balance").should("be.visible");
    });

    it("Checking for Amount Details", () => {
        robotEyes.getElementWithText("Amount details").should("be.visible");
    });

    it("Checking for Sell Max Button", () => {
        robotEyes.getElementWithText('Sell max').click();
    });

    it("Checking for Selling Summary", () => {
        robotEyes.getElementWithText("paying through").should("be.visible");
        robotEyes.getElementWithText("Delivery fees").should("be.visible");
        robotEyes.getElementWithText("Deposit to").should("be.visible");
        robotEyes.getElementWithText("Total").should("be.visible");
    });

    it("Checking for the form in which we want to deposite money in our wallet", () => {
        robotEyes.getElementWithText("USD Coin (Cash)").should("be.visible");
    });

    it("Checking the link from Sell page  to Success  page after selling", () => {

        robotEyes.getElementWithText("SELL NOW").click();
        robotEyes.seesPathNameInUrl("/success");
    })
    






    });
});