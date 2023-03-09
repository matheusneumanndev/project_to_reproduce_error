import { expect } from 'chai';
import BemVindoScreen from '../screenobjects/bem_vindo.screen';
import SolicitarDemonstracaoScreen from '../screenobjects/solicitar_demonstracao.screen';

import {Given, When, Then} from '@cucumber/cucumber';

Given(/^que o usuário está na Tela Bem Vindo$/, async () => {
    console.log('que o usuário está na Tela Bem Vindo');
    if (driver.isIOS) {
        await driver.reset();
    } else {
        await driver.closeApp();

        await driver.pause(10000);
        await driver.launchApp();

        await driver.pause(10000);
    }
    await BemVindoScreen.entrarButton.waitForDisplayed(20000);

    //the error should be here at the next line (22)
    await expect(await button.isDisplayed()).equal(true,);
});



// <<<<<<<<<<-------------------------------- it prints the error here
When(/^ele clicar em Solicitar Demonstração$/, async () => {
    console.log('ele clicar em Solicitar Demonstração');

    await BemVindoScreen.solicitarDemonstracaoButton.waitForDisplayed(20000);
    await BemVindoScreen.solicitarDemonstracaoButton.click();
});



Then(/^ele deve ir para a Tela Solicitar Demonstração$/, async () => {
    console.log('ele deve ir para a Tela Solicitar Demonstração');
    await SolicitarDemonstracaoScreen.solicitarDemonstracaoScreenAndroid.waitForDisplayed(
        20000,
    );
    await expect(
        await SolicitarDemonstracaoScreen.solicitarDemonstracaoScreenAndroid.isDisplayed(),
    );
});
