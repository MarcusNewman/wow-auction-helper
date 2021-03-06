import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { SetupComponent } from './components/settings/setup/setup.component';
import { RealmService } from './services/realm.service';
import { CharactersComponent } from './components/settings/characters/characters.component';
import { CharacterComponent } from './components/settings/characters/character/character.component';
import { CharacterService } from './services/character.service';
import { AuctionsService } from './services/auctions.service';
import { DatabaseService } from './services/database.service';
import { ItemService } from './services/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedService } from './services/shared.service';
import { MenuComponent } from './components/navbar/menu/menu.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CraftingComponent } from './components/crafting/crafting.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CraftingService } from './services/crafting.service';
import { GoldPipe } from './pipes/gold.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IsRegisteredService } from './Is-registered.service';
import { DashboardItemComponent } from './components/dashboard/dashboard-item/dashboard-item.component';
import { AuctionsComponent } from './components/auctions/auctions.component';
import { UpdateComponent } from './components/update/update.component';
import { DownloadComponent } from './components/navbar/download/download.component';
import { MaterialsComponent } from './components/data-table/materials/materials.component';
import { ShoppingCartComponent } from './components/navbar/shopping-cart/shopping-cart.component';
import { ItemComponent } from './components/item/item.component';
import { WowdbService } from './services/wowdb.service';
import { LineChartComponent } from './components/item/line-chart/line-chart.component';
import { IconComponent } from './components/item/icon/icon.component';
import { ResetCalcComponent } from './components/item/reset-calc/reset-calc.component';
import { PetsService } from './services/pets.service';
import { SortIconComponent } from './components/sort-icon/sort-icon.component';
import { AboutComponent } from './components/about/about.component';
import { MyAuctionsComponent } from './components/auctions/my-auctions/my-auctions.component';
import { TradeVendorsComponent } from './components/trade-vendors/trade-vendors.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { GeneralSettingsComponent } from './components/settings/general-settings/general-settings.component';
import { NotificationSettingsComponent } from './components/settings/notification-settings/notification-settings.component';
import { CraftingSettingsComponent } from './components/settings/crafting-settings/crafting-settings.component';
import { WatchlistItemComponent } from './components/watchlist/watchlist-item/watchlist-item.component';
import { WatchlistManagerComponent } from './components/watchlist/watchlist-manager/watchlist-manager.component';
import { AboutCraftingComponent } from './components/about/about-crafting/about-crafting.component';
import { AboutPrivacyComponent } from './components/about/about-privacy/about-privacy.component';
import { AboutDataComponent } from './components/about/about-data/about-data.component';
import { AboutWhatIsComponent } from './components/about/about-what-is/about-what-is.component';
import { DashboardItemsComponent } from './components/dashboard/dashboard-items/dashboard-items.component';
import { DashboardSellersComponent } from './components/dashboard/dashboard-sellers/dashboard-sellers.component';
import { CustomPricesComponent } from './components/settings/crafting-settings/custom-prices/custom-prices.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { SellerComponent } from './components/sellers/seller/seller.component';
import { NewsComponent } from './components/news/news.component';
import { WatchlistItemManagerComponent } from './components/watchlist/watchlist-item-manager/watchlist-item-manager.component';
import { TechnologyComponent } from './components/about/technology/technology.component';
import { CustomProcComponent } from './components/settings/crafting-settings/custom-proc/custom-proc.component';
import { SellerChartComponent } from './components/sellers/seller-chart/seller-chart.component';
import { MyPetsComponent } from './components/my-pets/my-pets.component';
import { MarketResetComponent } from './components/item/market-reset/market-reset.component';


@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    CharactersComponent,
    CharacterComponent,
    NavbarComponent,
    MenuComponent,
    DataTableComponent,
    CraftingComponent,
    SettingsComponent,
    GoldPipe,
    DashboardComponent,
    DashboardItemComponent,
    AuctionsComponent,
    UpdateComponent,
    DownloadComponent,
    MaterialsComponent,
    ShoppingCartComponent,
    ItemComponent,
    LineChartComponent,
    IconComponent,
    ResetCalcComponent,
    SortIconComponent,
    AboutComponent,
    MyAuctionsComponent,
    TradeVendorsComponent,
    WatchlistComponent,
    GeneralSettingsComponent,
    NotificationSettingsComponent,
    CraftingSettingsComponent,
    WatchlistItemComponent,
    WatchlistManagerComponent,
    AboutCraftingComponent,
    AboutPrivacyComponent,
    AboutDataComponent,
    AboutWhatIsComponent,
    DashboardItemsComponent,
    DashboardSellersComponent,
    CustomPricesComponent,
    SellersComponent,
    SellerComponent,
    NewsComponent,
    WatchlistItemManagerComponent,
    TechnologyComponent,
    CustomProcComponent,
    SellerChartComponent,
    MyPetsComponent,
    MarketResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    RealmService,
    CharacterService,
    AuctionsService,
    DatabaseService,
    ItemService,
    SharedService,
    CraftingService,
    IsRegisteredService,
    WowdbService,
    PetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
