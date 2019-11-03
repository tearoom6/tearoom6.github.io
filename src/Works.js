import React from 'react'
import { Container, Header, Item } from 'semantic-ui-react'
import Work from './Work'

const Works = () => (
  <Container id='works'>
    <Header as='h2'>Works</Header>
    <Item.Group divided>
      <Work
        imgSrc='https://github.com/tearoom6/QuickDrive2/raw/master/src/img/icon128.png'
        icon='chrome'
        href='https://chrome.google.com/webstore/detail/quick-drive/aijfbconiilhjgfljolkoiaockgenpgn'
        title='Quick Drive'
        description='Chrome extension to provide quick access to your Google Drive files.'
        buttonText='Check'
      />
      <Work
        imgSrc='https://github.com/tearoom6/esa-plus/raw/master/app/images/icon-128.png'
        icon='chrome'
        href='https://chrome.google.com/webstore/detail/esa-plus/mamfaeimjhohmgiijfdhbdonbdmpeofc'
        title='esa-plus'
        description='Chrome Extension to add more features to esa.io.'
        buttonText='Check'
      />
      <Work
        imgSrc='https://lh5.ggpht.com/at6OFqrL1a-T2AVpLkizrxfEnoTrumjrlfKIjwTLfYkrCSXyH-7ueZqX99k2BBJtheU=w300-rw'
        icon='android'
        href='https://play.google.com/store/apps/details?id=jp.tearoom6.MemoryTouch'
        title='Breakthrough (Android)'
        description="Memorize an order of panels flushing, and trace in that order. It's simple!"
        buttonText='Check'
      />
      <Work
        imgSrc='https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/c6/41/37/c6413710-975e-58e9-7cfd-6bc1f0b41972/AppIcon-1x_U007emarketing-85-220-6.png/246x0w.png'
        icon='apple'
        href='https://itunes.apple.com/jp/app/memory-game-breakthrough/id978414951'
        title='Breakthrough (iOS)'
        description="Memorize an order of panels flushing, and trace in that order. It's simple!"
        buttonText='Check'
      />
      <Work
        imgSrc=''
        icon='github alternate'
        href='https://atom.io/packages/sync-sync'
        title='sync-sync'
        description="Atom package for managing posts & documents of blog/collaboration services."
        buttonText='Check'
      />
      <Work
        imgSrc=''
        icon='github alternate'
        href='https://atom.io/packages/s3uploader'
        title='s3uploader'
        description="Files uploader to Amazon S3 by drag & drop."
        buttonText='Check'
      />
      <Work
        imgSrc=''
        icon='file code outline'
        href='https://rubygems.org/gems/kenpo_api'
        title='KenpoApi'
        description='Ruby binding for ITS-kenpo reservation API.'
        buttonText='Check'
      />
      <Work
        imgSrc=''
        icon='python'
        href='https://pypi.org/project/jma-feed/'
        title='jma-feed'
        description='Python client library for JMA feed.'
        buttonText='Check'
      />
    </Item.Group>
  </Container>
)

export default Works

