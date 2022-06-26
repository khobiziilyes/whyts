import { Context, Telegraf } from 'telegraf';
import { Update } from 'typegram';

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);

bot.start(ctx => {
    ctx.reply('Hey tester ' + ctx.from.first_name);
});

bot.command('test', ctx => {
    ctx.reply('Working');
});