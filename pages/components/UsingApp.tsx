import styles from '../../styles/Docs.module.scss';
import { FC } from 'react';
import { Heading, VStack } from '@chakra-ui/react';

const UsingApp: FC = (props): JSX.Element => {
  return (
    <div id={styles.docsContainer}>
      <VStack>
        <VStack>
          <Heading size='2xl'>Using Our Application</Heading>
          <br />
          <Heading size='lg'>What is Panoptic?</Heading>
          <br />
          <p>
            <strong>Panoptic</strong> is an open-source website metrics tracking and visualization application, made with developers in mind to create a <em>seamless</em> development experience while <em>optimizing</em> your website.
          </p>
          <br />
          <Heading size='lg'>Why use Panoptic?</Heading>
          <br />
          <p>
            During development, it can be difficult to keep track of the performance of your application. There could be some change that is made which happens to degrade the user experience in some way. This is even harder to track when the losses are minute, or are related to something that is hidden unless you are expressely looking for it (i.e. accessibility). Using <strong>Panoptic</strong> you are able to track the metrics of your application, including:<strong> Performance, Accessibility, Best Practices, and SEO</strong>, over a long period of time, to catch exactly <em>where</em> and <em>why</em> a regression occurred. 
            <br />
            <br />
            With GitHub integration we are able to automatically run a test daily if there has been a commit to an endpoint's associated repository, making it simple and effective to visit our application at any point in your development process.
          </p>
          <br />
          <Heading size='lg'>Demo</Heading>
          <br />
          <p>
            If you would like to test the application prior to signing up, please utilize our <a className={styles.docsLink} href='./demo' target='_blank'>Demo Page</a>. From there you can run a test on any endpoint with our application. This data is not saved but a new test can be run at any time.
          </p>
          <br />
            <div className={styles.imageContainer}>
              <img src="https://i.gyazo.com/dc2288d131698a0a2680c1de6cfe88dd.gif" alt="Image from Gyazo" width="1000"/>
            </div>
          <br />
          <p>
            Clicking on one of the scores will then reveal more related metrics, for example expanding the Accessibility metrics will reveal 
          </p>
          <br />
          </VStack>
          <VStack>
            <div className={styles.imageContainer}>
              <img src="https://i.gyazo.com/5e31447789f0209e6a6b129de41077ea.gif" alt="Image from Gyazo" width="1000"/>
            </div>
          <br />
            <Heading size='lg'>Making an Account</Heading>
          <br />
          <p>
            If you would like to have your data stored to be referenced over time, then please head over to the signup/login pages.
            <br />
            <br />
            Log in to the application by making an account with us or sign up with your GitHub account.
            <br />
            <br />
            If you choose to log in with GitHub, then you will have access to organizing your testable endpoints within a list of your existing GitHub Repositories.
            <br />
            <br />
          </p>
        </VStack>
      </VStack>
    </div>
  );
};

export default UsingApp;
