import { CommandInteraction, ContextMenuInteraction } from 'discord.js';
import { GClient } from 'gcommands';

export class LanguageManager {
    public static __(i: CommandInteraction | ContextMenuInteraction, name: string) {
        const client = i.client as GClient;
        const language = i?.locale || i?.guildLocale || client.__lang__.defaultLanguage;
        
        return LanguageManager.getLanguage(client.__lang__, language, name);
    }

    private static getLanguage(lang: { defaultLanguage?: string; languageText?: object; }, language: string, name: string) {
        const json = lang.languageText;

        return json[language][name];
    }
}