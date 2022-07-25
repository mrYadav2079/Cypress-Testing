import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
    
    visitPage() {
        this.accessUrl("http://3.12.169.245:3000/");
    }
}

export class RobotEyes extends BaseEyes {
    
    getElementWithCypressId(cypressId: string) {
        return cy.get(`[data-cy=${cypressId}]`);
    }

    getElementWithDataTestId(dataTestId: string) {
        return cy.get(`[data-testid=${dataTestId}]`);
    }
    
    getElementWithText(text: string) {
        return cy.contains(text);
    }
}

export class RobotHands extends BaseHands {
    
    selectInputInUserLocation(location: string) {
        cy.get("input").type(`${location}{enter}`);
    }

    clickOnDataTestId(dataTestId: string) {
        cy.get(`[data-testid=${dataTestId}]`).click();
        return this;
    }
}