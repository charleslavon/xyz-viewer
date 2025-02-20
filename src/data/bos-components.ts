import type { NetworkId } from '@/utils/types';

type NetworkComponents = {
  applicationsPage: string;
  blog: string;
  blogPost: string;
  bosDirectory: string;
  componentSummary: string;
  componentsPage: string;
  default: string;
  digButton: string;
  editorComponentSearch: string;
  horizon: {
    homePage: string;
    appPage: string;
  };
  image: string;
  nearOrg: {
    cookiePrompt: string;
    cookiePolicy: string;
    ecosystemPage: string;
    ecosystemCommunityPage: string;
    ecosystemGetFundingPage: string;
    ecosystemOverviewPage: string;
    ecosystemWorkAndEarnPage: string;
    homePage: string;
    notifications: {
      page: string;
      alert: string;
      settings: string;
      button: string;
      iosHomeScreenAlert: string;
    };
    learnPage: string;
    blockchainPage: string;
    openWebApplicationsPage: string;
    fastAuthAndRelayersPage: string;
    dataInfrastructurePage: string;
    dataAvailabilityPage: string;
    termsPage: string;
    privacyPage: string;
    papersPage: string;
    foundersPage: string;
  };
  relayerDemo: string;
  notificationButton: string;
  peoplePage: string;
  profileImage: string;
  profileInlineBlock: string;
  profileName: string;
  profilePage: string;
  search: {
    indexPage: string;
    typeAheadDropdown: string;
  };
  settings: {
    index: string;
  };
  viewSource: string;
  widgetMetadata: string;
  widgetMetadataEditor: string;
  wrapper: string;
  eventsPage: string;
};

export const componentsByNetworkId = ((): Record<NetworkId, NetworkComponents | undefined> => {
  const testnetTLA =
    process.env.NEXT_PUBLIC_DISCOVERY_COMPONENTS_DEPLOYMENT_BRANCH === 'develop'
      ? 'discom-dev.testnet'
      : 'discom.testnet';

  return {
    testnet: {
      applicationsPage: `${testnetTLA}/widget/AppLibrary.IndexPage`,
      blog: `${testnetTLA}/widget/Blog/Feed`,
      blogPost: `${testnetTLA}/widget/BlogPostPage`,
      bosDirectory: 'one.testnet/widget/BOSDirectory',
      componentSummary: `${testnetTLA}/widget/ComponentSummary`,
      componentsPage: `${testnetTLA}/widget/ComponentsPage`,
      default: `${testnetTLA}/widget/ActivityPage`,
      digButton: `${testnetTLA}/widget/DIG.Button`,
      editorComponentSearch: 'one.testnet/widget/Editor.ComponentSearch',
      horizon: {
        homePage: 'nearhorizon.near/widget/HomePage',
        appPage: 'nearhorizon.near/widget/Index',
      },
      image: 'eugenethedream/widget/Image',
      nearOrg: {
        cookiePrompt: `${testnetTLA}/widget/NearOrg.CookiePrompt`,
        cookiePolicy: `${testnetTLA}/widget/NearOrg.CookiePolicy`,
        ecosystemPage: `${testnetTLA}/widget/NearOrg.EcosystemPage`,
        ecosystemCommunityPage: `${testnetTLA}/widget/NearOrg.Ecosystem.CommunityPage`,
        ecosystemGetFundingPage: `${testnetTLA}/widget/NearOrg.Ecosystem.GetFundingPage`,
        ecosystemOverviewPage: `${testnetTLA}/widget/NearOrg.Ecosystem.OverviewPage`,
        ecosystemWorkAndEarnPage: `${testnetTLA}/widget/NearOrg.Ecosystem.WorkAndEarnPage`,
        homePage: `${testnetTLA}/widget/NearOrg.HomePage`,
        notifications: {
          page: `${testnetTLA}/widget/NearOrg.Notifications.Notifications`,
          alert: `${testnetTLA}/widget/NearOrg.Notifications.NotificationAlert`,
          settings: `${testnetTLA}/widget/NearOrg.Notifications.Settings`,
          button: `${testnetTLA}/widget/NearOrg.Notifications.NotificationButton`,
          iosHomeScreenAlert: `${testnetTLA}/widget/NearOrg.Notifications.HomeScreenAlert`,
        },
        learnPage: `${testnetTLA}/widget/NearOrg.LearnPage`,
        blockchainPage: `${testnetTLA}/widget/NearOrg.BlockchainPage`,
        openWebApplicationsPage: `${testnetTLA}/widget/NearOrg.OpenWebApplicationsPage`,
        fastAuthAndRelayersPage: `${testnetTLA}/widget/NearOrg.FastAuthAndRelayersPage`,
        dataInfrastructurePage: `${testnetTLA}/widget/NearOrg.DataInfrastructurePage`,
        dataAvailabilityPage: `${testnetTLA}/widget/NearOrg.DataAvailabilityPage`,
        termsPage: `${testnetTLA}/widget/NearOrg.TermsPage`,
        privacyPage: `${testnetTLA}/widget/NearOrg.PrivacyPage`,
        papersPage: `${testnetTLA}/widget/NearOrg.PapersPage`,
        foundersPage: `${testnetTLA}/widget/NearOrg.FoundersPage`,
      },
      relayerDemo: 'one.testnet/widget/RelayerMessageDemo',
      notificationButton: `${testnetTLA}/widget/NotificationButton`,
      peoplePage: `${testnetTLA}/widget/PeoplePage`,
      profileImage: 'eugenethedream/widget/ProfileImage',
      profileInlineBlock: 'eugenethedream/widget/Profile.InlineBlock',
      profileName: 'eugenethedream/widget/ProfileName',
      profilePage: `${testnetTLA}/widget/ProfilePage`,
      search: {
        indexPage: `${testnetTLA}/widget/Search.IndexPage`,
        typeAheadDropdown: `${testnetTLA}/widget/Search.TypeAheadDropdown`,
      },
      settings: {
        index: `${testnetTLA}/widget/Settings.Index`,
      },
      viewSource: 'eugenethedream/widget/WidgetSource',
      widgetMetadata: 'eugenethedream/widget/WidgetMetadata',
      widgetMetadataEditor: `${testnetTLA}/widget/WidgetMetadataEditor`,
      wrapper: `${testnetTLA}/widget/GatewayWrapper`,
      eventsPage: `${testnetTLA}/widget/Events.Index`,
    },

    mainnet: {
      applicationsPage: 'nearcatalog.near/widget/Index',
      blog: 'near/widget/Blog.Feed',
      blogPost: 'near/widget/BlogPostPage',
      bosDirectory: 'onboarder.near/widget/BOSDirectory',
      componentSummary: 'near/widget/ComponentSummary',
      componentsPage: 'near/widget/ComponentsPage',
      default: 'near/widget/ProfilePage',
      digButton: 'near/widget/DIG.Button',
      editorComponentSearch: 'mob.near/widget/Editor.ComponentSearch',
      horizon: {
        homePage: 'nearhorizon.near/widget/HomePage',
        appPage: 'nearhorizon.near/widget/Index',
      },
      image: 'mob.near/widget/Image',
      nearOrg: {
        cookiePrompt: 'near/widget/NearOrg.CookiePrompt',
        cookiePolicy: 'near/widget/NearOrg.CookiePolicy',
        ecosystemPage: 'near/widget/NearOrg.EcosystemPage',
        ecosystemCommunityPage: 'near/widget/NearOrg.Ecosystem.CommunityPage',
        ecosystemGetFundingPage: 'near/widget/NearOrg.Ecosystem.GetFundingPage',
        ecosystemOverviewPage: 'near/widget/NearOrg.Ecosystem.OverviewPage',
        ecosystemWorkAndEarnPage: 'near/widget/NearOrg.Ecosystem.WorkAndEarnPage',
        homePage: 'near/widget/NearOrg.HomePage',
        notifications: {
          page: 'near/widget/NearOrg.Notifications.Notifications',
          alert: 'near/widget/NearOrg.Notifications.NotificationAlert',
          settings: 'near/widget/NearOrg.Notifications.Settings',
          button: 'near/widget/NearOrg.Notifications.NotificationButton',
          iosHomeScreenAlert: 'near/widget/NearOrg.Notifications.HomeScreenAlert',
        },
        learnPage: 'near/widget/NearOrg.LearnPage',
        blockchainPage: 'near/widget/NearOrg.BlockchainPage',
        openWebApplicationsPage: 'near/widget/NearOrg.OpenWebApplicationsPage',
        fastAuthAndRelayersPage: 'near/widget/NearOrg.FastAuthAndRelayersPage',
        dataInfrastructurePage: 'near/widget/NearOrg.DataInfrastructurePage',
        dataAvailabilityPage: 'near/widget/NearOrg.DataAvailabilityPage',
        termsPage: 'near/widget/NearOrg.TermsPage',
        privacyPage: 'near/widget/NearOrg.PrivacyPage',
        papersPage: 'near/widget/NearOrg.PapersPage',
        foundersPage: 'near/widget/NearOrg.FoundersPage',
      },
      relayerDemo: 'relayer-demo.near/widget/RelayerMessageDemo',
      notificationButton: 'near/widget/NotificationButton',
      peoplePage: 'near/widget/PeoplePage',
      profileImage: 'mob.near/widget/ProfileImage',
      profileInlineBlock: 'mob.near/widget/Profile.InlineBlock',
      profileName: 'patrick.near/widget/ProfileName',
      profilePage: 'near/widget/ProfilePage',
      search: {
        indexPage: 'near/widget/Search.IndexPage',
        typeAheadDropdown: 'near/widget/Search.TypeAheadDropdown',
      },
      settings: {
        index: 'near/widget/Settings.Index',
      },
      viewSource: 'mob.near/widget/WidgetSource',
      widgetMetadata: 'mob.near/widget/WidgetMetadata',
      widgetMetadataEditor: 'near/widget/WidgetMetadataEditor',
      wrapper: 'near/widget/GatewayWrapper',
      eventsPage: 'near/widget/Events.Index',
    },
  };
})();