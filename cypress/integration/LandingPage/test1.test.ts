import { Dependencies, RobotEyes, RobotHands } from "../../robots/LandingPage/basic.cy";

context("Search LandingPage Test", () => {

    const dependencies = new Dependencies();
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    

    describe("Tests for the First page of Landing Page", () => {

        it("Navigate to landing page", () => {
            dependencies.visitPage();
            robotEyes.seesPathNameInUrl("/");
        });

        // it("Checking for Minet logo", () => {
        //     dependencies.visitPage();
        //     robotEyes.getElementWithDataTestId("minet-logo").should("be.visible");
        // });

        it("Checking for Dashboard", () => {
            dependencies.visitPage();
            robotEyes.getElementWithText("Dashboard").should("be.visible");
        });

        it("Checking for Portfolio", () => {
            dependencies.visitPage();
            robotEyes.getElementWithText("Recent transactions").should("be.visible");
        });
        it("Checking for Recent Transaction", () => {
          dependencies.visitPage();
          robotEyes.getElementWithText("My Portfolio value").should("be.visible");
      });

        it("Checking for all Cryptocurrencies", () => {
          dependencies.visitPage();
          robotEyes.getElementWithText("Bitcoin").should("be.visible");
          robotEyes.getElementWithText("Ethereum").should("be.visible");
          robotEyes.getElementWithText("Binance").should("be.visible");
          robotEyes.getElementWithText("Tether").should("be.visible");

      });

      it("Checking for My Wallets", () => {
        dependencies.visitPage();
        robotEyes.getElementWithText("My wallets").should("be.visible");
    });

    it("Checking for Watchlist", () => {
        dependencies.visitPage();
        robotEyes.getElementWithText("Watchlist").should("be.visible");
    });

    it("Checking for Total Balance", () => {
        dependencies.visitPage();
        robotEyes.getElementWithText("Total Balance").should("be.visible");
    });
    it("Checking for Need Help Button", () => {
        dependencies.visitPage();
        robotEyes.getElementWithText("NEED HELP").should("be.visible");
    });

    it("Checking for Correct abbreviations of Coins", () => {
        dependencies.visitPage();
        robotEyes.getElementWithText("BTC").should("be.visible");
        robotEyes.getElementWithText("Binance").should("be.visible");
        robotEyes.getElementWithText("ETH").should("be.visible");
    });

    it("Checking the link from landing page  to Sell Page", () => {

        robotEyes.getElementWithText("SELL").click();
        robotEyes.seesPathNameInUrl("/sell");
    })

    it("Checking the link from landing page  to Buy Page", () => {

        robotEyes.getElementWithText("BUY").click();
        robotEyes.seesPathNameInUrl("/buy");
    })
    // it("Checking the image", () => {
    //     dependencies.visitPage();
    //     cy.get('div').find('img').should('include','data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDBDMTUuNTIzIDAgMjAgNC40NzcgMjAgMTBDMjAgMTUuNTIzIDE1LjUyMyAyMCAxMCAyMEM0LjQ3NyAyMCAwIDE1LjUyMyAwIDEwQzAgNC40NzcgNC40NzcgMCAxMCAwWk0xMCAyQzUuNTgyIDIgMiA1LjU4MiAyIDEwQzIgMTQuNDE4IDUuNTgyIDE4IDEwIDE4QzE0LjQxOCAxOCAxOCAxNC40MTggMTggMTBDMTggNS41ODIgMTQuNDE4IDIgMTAgMlpNMTMuODMzIDUuMzM3QzE0LjA3IDUuMTcxIDE0LjM5MiA1LjE5OSAxNC41OTYgNS40MDRDMTQuOCA1LjYwOCAxNC44MjYgNS45MyAxNC42NTkgNi4xNjRDMTIuNDc5IDkuMjEgMTEuMjc5IDEwLjg0MiAxMS4wNjEgMTEuMDYxQzEwLjQ3NSAxMS42NDYgOS41MjUgMTEuNjQ2IDguOTM5IDExLjA2MUM4LjM1NCAxMC40NzUgOC4zNTQgOS41MjUgOC45MzkgOC45MzlDOS4zMTMgOC41NjYgMTAuOTQ0IDcuMzY1IDEzLjgzMyA1LjMzN1pNMTUuNSA5QzE2LjA1MiA5IDE2LjUgOS40NDggMTYuNSAxMEMxNi41IDEwLjU1MiAxNi4wNTIgMTEgMTUuNSAxMUMxNC45NDggMTEgMTQuNSAxMC41NTIgMTQuNSAxMEMxNC41IDkuNDQ4IDE0Ljk0OCA5IDE1LjUgOVpNNC41IDlDNS4wNTIgOSA1LjUgOS40NDggNS41IDEwQzUuNSAxMC41NTIgNS4wNTIgMTEgNC41IDExQzMuOTQ4IDExIDMuNSAxMC41NTIgMy41IDEwQzMuNSA5LjQ0OCAzLjk0OCA5IDQuNSA5Wk02LjgxOCA1LjQwNEM3LjIwOCA1Ljc5NCA3LjIwOCA2LjQyNyA2LjgxOCA2LjgxOEM2LjQyOCA3LjIwOCA1Ljc5NCA3LjIwOCA1LjQwNCA2LjgxOEM1LjAxNCA2LjQyOCA1LjAxNCA1Ljc5NCA1LjQwNCA1LjQwNEM1Ljc5NCA1LjAxNCA2LjQyNyA1LjAxNCA2LjgxOCA1LjQwNFpNMTAgMy41QzEwLjU1MiAzLjUgMTEgMy45NDggMTEgNC41QzExIDUuMDUyIDEwLjU1MiA1LjUgMTAgNS41QzkuNDQ4IDUuNSA5IDUuMDUyIDkgNC41QzkgMy45NDggOS40NDggMy41IDEwIDMuNVoiIGZpbGw9IiMwMDUyRkYiLz4KPC9zdmc+Cg==')
    // })

        


    });

});