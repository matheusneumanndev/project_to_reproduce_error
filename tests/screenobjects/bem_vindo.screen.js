import AppScreen from './app.screen';

const SELECTORS = {
    ENTRAR_BUTTON: '~ENTRAR',
    SOLICITAR_DEMONSTRACAO_BUTTON: '~SOLICITAR DEMONSTRAÇÃO',
    DIGITAR_A_SENHA: '~Digitar a senha',
};

class BemVindoScreen extends AppScreen {
    constructor() {
        super(SELECTORS.ENTRAR_BUTTON);
    }

    get entrarButton() {
        return $(SELECTORS.ENTRAR_BUTTON);
    }

    get solicitarDemonstracaoButton() {
        return $(SELECTORS.SOLICITAR_DEMONSTRACAO_BUTTON);
    }

    get digitarASenha() {
        return $(SELECTORS.DIGITAR_A_SENHA);
    }
}

export default new BemVindoScreen();
