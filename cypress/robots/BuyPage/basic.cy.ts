import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
    
    visitBuyPage() {
        this.accessUrl("http://3.12.169.245:3000/buy");
    }
    setViewport() {
        return cy.viewport(1280,720);
    }
}

export class RobotEyes extends BaseEyes {
    
    seesBuyPage() {
        this.seesDomVisible("Buy Crypto")
    }

    getElementWithText(skip: string){
        return cy.contains(skip)
    }

    checkBuyPageUrl() {
        return cy.url()
        .should('include','/buy');
    }
    
}

export class RobotHands extends BaseHands {

    getElementWithTestId(dataTestId : string){
        return cy.get(`[data-testid=${dataTestId}]`)
    }
    
}