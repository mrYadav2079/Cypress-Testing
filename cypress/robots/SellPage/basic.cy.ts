import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
    
    visitSellPage() {
        this.accessUrl("http://3.12.169.245:3000/sell");
    }
    setViewport() {
        return cy.viewport(1280,720);
    }
}

export class RobotEyes extends BaseEyes {
    
    seesSellPage() {
        this.seesDomVisible("Sell Crypto")
    }

    getElementWithText(skip: string){
        return cy.contains(skip)
    }

    checkSellPageUrl() {
        return cy.url()
        .should('include','/sell');
    }
    
}

export class RobotHands extends BaseHands {

    getElementWithTestId(dataTestId : string){
        return cy.get(`[data-testid=${dataTestId}]`)
    }
    
}