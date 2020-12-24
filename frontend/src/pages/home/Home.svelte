<script lang="ts">
  import { navigate } from 'svelte-routing';
  import { Accordion, AccordionItem } from 'carbon-components-svelte';

  import BasicLayout from '../../layouts/basic/BasicLayout.svelte';
  import { createAuthenticator, login } from '../../utils/auth';

  const authenticate = createAuthenticator();

  let badger = true;
  let email = '';
  let password = '';
  let error = '';

  async function submit(e: Event) {
    e.preventDefault();

    try {
      await login(email, password, authenticate);
      navigate('/badges', { replace: true });
    } catch (e) {
      error = e;
    }
  }
</script>

<style lang="scss">
  .intro-container,
  .login-container {
    width: 50%;
  }

  @media only screen and (max-width: 800px) {
    .intro-container,
    .login-container {
      width: 100%;
    }

    .intro-container {
      padding: 0 !important;
    }

    .login-container {
      margin-top: 3em;
      min-height: 0 !important;
    }
  }

  .intro-container {
    padding-right: 5em;
  }

  .login-container {
    background-color: var(--color-snow);
    padding: 2em;
    min-height: 30em;
  }

  .big {
    font-size: 1.5em;
    margin-bottom: 1.5em;
  }

  .clickable {
    cursor: pointer;
  }
</style>

<Accordion>
  <AccordionItem title="Natural Language Classifier">
    <p>
      Natural Language Classifier uses advanced natural language processing and machine learning
      techniques to create custom classification models. Users train their data and the service
      predicts the appropriate category for the inputted text.
    </p>
  </AccordionItem>
  <AccordionItem title="Natural Language Understanding">
    <p>
      Analyze text to extract meta-data from content such as concepts, entities, emotion, relations,
      sentiment and more.
    </p>
  </AccordionItem>
  <AccordionItem title="Language Translator">
    <p>
      Translate text, documents, and websites from one language to another. Create industry or
      region-specific translations via the service's customization capability.
    </p>
  </AccordionItem>
</Accordion>
