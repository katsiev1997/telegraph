import { Telegraf, session } from "telegraf";
import { ConfigService } from "../config.service";
import { IConfigService } from "./config/config.interface";
import { IBotContext } from "./context/context.interface";

class Bot {
  bot: Telegraf<IBotContext>;
  constructor(private readonly configService: IConfigService) {
    this.bot = new Telegraf<IBotContext>(this.configService.get("TOKEN"));
    this.bot.use(session());
  }
  init() {
    this.bot.launch();
  }
}

const bot = new Bot(new ConfigService());
bot.init();
