import { AngularRunner } from "./angular-workers/angular-runner";
import { KarmaHelper } from "./karma-workers/karma-helper";
import explorerKarmaConfig = require("./config/test-explorer-karma.conf");
import { KarmaEventListener } from "./karma-workers/karma-event-listener";
import { TestSuiteInfo } from "vscode-test-adapter-api";

export class AngularTestExplorer {
  private readonly karmaHelper: KarmaHelper;
  private readonly karmaEventListener: KarmaEventListener;
  private readonly baseKarmaConfigPath: string = "/Users/pferraggi/Documents/GitHub/angular-test-explorer/out/config/test-explorer-karma.conf.js";

  public constructor(private readonly angularProjectRootPath: string) {
    explorerKarmaConfig.setGlobals({
      karmaConfig: { basePath: this.angularProjectRootPath },
    });
    this.karmaHelper = KarmaHelper.getInstance();
    this.karmaEventListener = new KarmaEventListener();
    this.karmaEventListener.startListening();
    const angularRunner = new AngularRunner(this.angularProjectRootPath, this.baseKarmaConfigPath, "");
    angularRunner.start();
  }

  public async loadTests(): Promise<TestSuiteInfo> {
    await this.karmaHelper.runServer();
    
    return this.karmaEventListener.tests;
  }

  public async runTests(): Promise<void> {
    await this.karmaHelper.runServer();
  }

  public debugTests(): void {
    throw new Error("Not Implemented");
  }
}
