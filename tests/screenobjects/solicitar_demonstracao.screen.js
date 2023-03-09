import AppScreen from './app.screen';

const SELECTORS = {
    SOLICITAR_DEMONSTRACAO_BUTTON: '~SOLICITAR DEMONSTRAÇÃO',
    SOLICITAR_DEMONSTRACAO_BUTTON_ANDROID:
        '//android.widget.ImageView[@content-desc="SOLICITAR DEMONSTRAÇÃO    "]',
    SOLICITAR_DEMONSTRACAO_BUTTON_IOS: '//*[contains(@name, "SOLICITAR")]',
    SOLICITAR_DEMONSTRACAO_SCREEN_IOS: '//*[contains(@name, "Quem sabe")]',
    SOLICITAR_DEMONSTRACAO_SCREEN_ANDROID:
        '//android.view.View[@content-desc="Quem sabe antes decide\n' +
        'melhor."]',
    VOLTAR_IOS:
        '//XCUIElementTypeApplication[@name="Valor PRO"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeButton',
    SOLICITAR_DEMOSNTRACAO_WEB:
        '//*[@text="Preencha o formulário abaixo para solicitar sua demonstração."]',
    SOLICITAR_DEMOSNTRACAO_WEB_IOS: '//*[contains(@name, "SOLICITE")]',
};

class SolicitarDemonstracaoScreen extends AppScreen {
    constructor() {
        super(driver.isIOS ? SELECTORS.SOLICITAR_DEMONSTRACAO_SCREEN_IOS : SELECTORS.SOLICITAR_DEMONSTRACAO_SCREEN_ANDROID);
    }

    get solicitarDemonstracaoScreenAndroid() {
        return $(SELECTORS.SOLICITAR_DEMONSTRACAO_SCREEN_ANDROID);
    }

    get solicitarDemonstracaoScreenIOS() {
        return $(SELECTORS.SOLICITAR_DEMONSTRACAO_SCREEN_IOS);
    }

    get voltariOS() {
        return $(SELECTORS.VOLTAR_IOS);
    }

    get solicitarDemonstracaoButton() {
        return $(SELECTORS.SOLICITAR_DEMONSTRACAO_BUTTON);
    }

    get solicitarDemonstracaoButtonAndroid() {
        return $(SELECTORS.SOLICITAR_DEMONSTRACAO_BUTTON_ANDROID);
    }

    get solicitarDemonstracaoButtonIos() {
        return $(SELECTORS.SOLICITAR_DEMONSTRACAO_BUTTON_IOS);
    }

    get solicitarDemonstracaoWeb() {
        return $(SELECTORS.SOLICITAR_DEMOSNTRACAO_WEB);
    }

    get solicitarDemonstracaoWebIOS() {
        return $(SELECTORS.SOLICITAR_DEMOSNTRACAO_WEB_IOS);
    }
}

export default new SolicitarDemonstracaoScreen();
