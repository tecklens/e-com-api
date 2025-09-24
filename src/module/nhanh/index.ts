export * from './dto'
import { NhanhConfig, NhanhProductSearchRequest, NhanhResponseAccessToken } from './dto';
import * as AuthorizationApi from './api/authorization.api';
import { getListProduct } from './api/product.api';

export class NhanhModule {
  private config: NhanhConfig;

  constructor(config: NhanhConfig) {
    this.config = config;
  }

  setConfig(config: NhanhConfig) {
    this.config.returnLink = config.returnLink;
    this.config.version = config.version;
    this.config.appSecret = config.appSecret;
  }

  getConfig(): NhanhConfig {
    return this.config;
  }

  async fetchTokenWithAuthCode(authCode: string): Promise<NhanhResponseAccessToken> {
    return await AuthorizationApi.fetchTokenWithAuthCodeNhanh(authCode, this.config);
  }

  async generateAuthLink(): Promise<any> {
    return AuthorizationApi.generateAuthLinkNhanh(this.config);
  }

  async getListProduct({params}: {params: NhanhProductSearchRequest}): Promise<any> {
    return await getListProduct(params, this.config);
  }
}