///<reference types="cypress"/>
import { Dependencies, RobotEyes, RobotHands } from "../../robots/SuccessSellPage/basic.cy";

context("Search Header", () => {

    const dependencies = new Dependencies();
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();


    
    describe(" Success Sell Page Testing", () => {

        it("Setting view port",() => {
            dependencies.setViewport();
            
        });
    it("Visiting the Success  Sell page",()=>{
        
        dependencies.accessUrl('http://3.12.169.245:3000/sell/success');
        robotHands.wait(7000)
    });
    it("Checking Sell Page URL",()=>{


        robotEyes.checkSellPageUrl();
        
    });
    it("Checking for Checkout", () => {
        robotEyes.getElementWithText("Checkout").should("be.visible");
    });

   
    






    });
});