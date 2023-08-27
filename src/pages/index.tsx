import { isPassKeyAvailable } from '@near-js/biometric-ed25519';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styled from 'styled-components';
import { openToast } from '@/components/lib/Toast';
import { MetaTags } from '@/components/MetaTags';
import { ComponentWrapperPage } from '@/components/near-org/ComponentWrapperPage';
import { NearOrgHomePage } from '@/components/near-org/NearOrg.HomePage';
import { VmComponent } from '@/components/vm/VmComponent';
import { useBosComponents } from '@/hooks/useBosComponents';
import { useDefaultLayout } from '@/hooks/useLayout';
import { useAuthStore } from '@/stores/auth';
import { useCurrentComponentStore } from '@/stores/current-component';
import type { NextPageWithLayout } from '@/utils/types';

const LS_ACCOUNT_ID = 'near-social-vm:v01::accountId:';

const HomePage: NextPageWithLayout = () => {
  const router = useRouter();
  const [signedInOptimistic, setSignedInOptimistic] = useState(false);
  const signedIn = useAuthStore((store) => store.signedIn);
  const components = useBosComponents();
  const setComponentSrc = useCurrentComponentStore((store) => store.setSrc);
  const authStore = useAuthStore();
  const [componentProps, setComponentProps] = useState<Record<string, unknown>>({});

  useEffect(() => {
    const optimisticAccountId = window.localStorage.getItem(LS_ACCOUNT_ID);
    setSignedInOptimistic(!!optimisticAccountId);
  }, []);

  useEffect(() => {
    if (!signedIn) {
      setComponentSrc(null);
    }
  }, [signedIn, setComponentSrc]);

  // if we are loading the ActivityPage, process the query params into componentProps
  useEffect(() => {
    if (signedIn || signedInOptimistic) {
      setComponentProps(router.query);
    }
  }, [router.query, signedIn, signedInOptimistic]);

  useEffect(() => {
    if (signedIn) {
      isPassKeyAvailable().then((passKeyAvailable: boolean) => {
        if (!passKeyAvailable) {
          openToast({
            title: 'Limited Functionality',
            type: 'WARNING',
            description: 'To access all account features, try using a browser that supports passkeys',
            duration: 5000,
          });
        }
      });
    }
  }, [signedIn]);

  const Wrapper = styled.div`
    --section-gap: 162px;
    --large-gap: 82px;
    --medium-gap: 48px;
    padding: calc(var(--section-gap) / 2) 0 0;
    position: relative;

    @media (max-width: 900px) {
      --section-gap: 60px;
      --large-gap: 48px;
      --medium-gap: 24px;
    }
  `;

  return (
    <>
      <MetaTags
        title={`Charles' Gateway into the Open Web`}
        description={`"Built on Near Protocol's Blockchain Operating System for an Open Web. Create and discover decentralized apps, and help build the future of the web."`}
      />
      <Wrapper className="container-xl">
        <VmComponent src="charleslavon.near/widget/ProfilePage" props={{ accountId: 'charleslavon.near' }} />
      </Wrapper>
    </>
  );
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
