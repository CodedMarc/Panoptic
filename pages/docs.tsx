import type { NextPage } from 'next';
import Nav from './components/Nav';
import UsingApp from './components/UsingApp';
import AboutLH from './components/AboutLH';
import UsingMetrics from './components/UsingMetrics';
import styles from '../styles/Docs.module.scss';
import { useState } from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const Docs: NextPage = (props): JSX.Element => {
  const [activeBtn, setActiveBtn] = useState(0);
  let buttons;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  if (activeBtn === 0) {
    buttons = (
      <div id={styles.docsNav}>
        <div>
          <ul id={styles.docsList}>
            <li className={styles.docsListItem}>
              <button
                disabled
                id='listButton1'
                className={styles.listButton}
                onClick={() => setActiveBtn(0)}
              >
                Using our Application
              </button>
            </li>
            <li className={styles.docsListItem}>
              <button
                id='listButton2'
                className={styles.listButton}
                onClick={() => setActiveBtn(1)}
              >
                About Google Lighthouse
              </button>
            </li>
            <li className={styles.docsListItem}>
              <button
                id='listButton3'
                className={styles.listButton}
                onClick={() => setActiveBtn(2)}
              >
                Using the Metrics
              </button>
            </li>
          </ul>
        </div>
        <div id={styles.rightside}>
          <UsingApp />
        </div>
      </div>
    );
  }
  if (activeBtn === 1) {
    buttons = (
      <div id={styles.docsNav}>
        <div>
          <ul id={styles.docsList}>
            <li className={styles.docsListItem}>
              <button
                id='listButton1'
                className={styles.listButton}
                onClick={() => setActiveBtn(0)}
              >
                Using our Application
              </button>
            </li>
            <li className={styles.docsListItem}>
              <button
                disabled
                id='listButton2'
                className={styles.listButton}
                onClick={() => setActiveBtn(1)}
              >
                About Google Lighthouse
              </button>
            </li>
            <li className={styles.docsListItem}>
              <button
                id='listButton3'
                className={styles.listButton}
                onClick={() => setActiveBtn(2)}
              >
                Using the Metrics
              </button>
            </li>
          </ul>
        </div>
        <div id={styles.rightside}>
          <AboutLH />
        </div>
      </div>
    );
  }
  if (activeBtn === 2) {
    buttons = (
      <div id={styles.docsNav}>
        <div>
          <ul id={styles.docsList}>
            <li className={styles.docsListItem}>
              <button
                id='listButton1'
                className={styles.listButton}
                onClick={() => setActiveBtn(0)}
              >
                Using our Application
              </button>
            </li>
            <li className={styles.docsListItem}>
              <button
                id='listButton2'
                className={styles.listButton}
                onClick={() => setActiveBtn(1)}
              >
                About Google Lighthouse
              </button>
            </li>
            <li className={styles.docsListItem}>
              <button
                disabled
                id='listButton3'
                className={styles.listButton}
                onClick={() => setActiveBtn(2)}
              >
                Using the Metrics
              </button>
            </li>
          </ul>
        </div>
        <div id={styles.rightside}>
          <UsingMetrics />
        </div>
      </div>
    );
  }
  return (
    <div id={styles.docsPage}>
      <Nav />
      {/* {buttons} */}
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div id={styles.docsNav}>
            <div>
              <ul id={styles.docsList}>
                <li className={styles.docsListItem}>
                  <button
                    disabled
                    id='listButton1'
                    className={styles.listButton}
                    onClick={() => setActiveBtn(0)}
                  >
                    Using our Application
                  </button>
                </li>
                <li className={styles.docsListItem}>
                  <button
                    id='listButton2'
                    className={styles.listButton}
                    onClick={() => setActiveBtn(1)}
                  >
                    About Google Lighthouse
                  </button>
                </li>
                <li className={styles.docsListItem}>
                  <button
                    id='listButton3'
                    className={styles.listButton}
                    onClick={() => setActiveBtn(2)}
                  >
                    Using the Metrics
                  </button>
                </li>
              </ul>
            </div>
            {/* <div id={styles.rightside}>
              <UsingApp />
            </div> */}
          </div>
        </DrawerContent>
      </Drawer>
      <UsingApp />
    </div>
  );
};

export default Docs;
