import { SharedService } from './shared.service';
import { Keys } from './keys';
import { environment } from '../../environments/environment';

export class Endpoints {
  public static readonly TSM_API = 'https://api.tradeskillmaster.com/v1/item';
  public static readonly BNET_API = 'https://us.api.battle.net/wow/';
  public static readonly WAH_API = 'https://wah.jonaskf.net/';
  public static readonly WAH_LOCAL_API = 'http://localhost:3000/api/';
  public static readonly WAH_NODE_API = 'https://wowauctionshelper-env.dvsgifqqkj.eu-west-1.elasticbeanstalk.com/api/';
  public static readonly IMAGE_PATH = 'https://render-eu.worldofwarcraft.com/';
  public static readonly IMAGE_PATH_ICONS = Endpoints.IMAGE_PATH + 'icons/56';
  // char/realm/??/??.jpg
  public static readonly IMAGE_PATH_CHARACTER = Endpoints.IMAGE_PATH + 'character';
  // https://render-eu.worldofwarcraft.com/character/draenor/217/111838681-avatar.jpg

  public static getUrl(path: string): string {
    return environment.production ?
      `/api/${path}` : `${ Endpoints.WAH_LOCAL_API }${ path }`;
  }

  public static getUndermineUrl(): string {
    if (!SharedService.user) {
      return '';
    }

    return `https://theunderminejournal.com/#${
      SharedService.user.region}/${
        SharedService.realms[SharedService.user.realm].slug}/`;
  }

 // http://localhost:3000/api/auction?
  public static getBattleNetApi(query: string, region?: string): string {
    // 'assets/mock/auctions.json'
    return `https://${
      region ? (region === 'eu' ? 'eu' : 'us') : SharedService.user.region
      }.api.battle.net/wow/${
        query
      }${
        Endpoints.getBinder(query)
      }apikey=${Keys.blizzard}`;
  }

  private static getBinder(query: string) {
    return query.indexOf('?') > 0 ? '&' : '?';
  }
}
