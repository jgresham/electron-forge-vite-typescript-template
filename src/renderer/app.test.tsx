// @vitest-environment happy-dom

import { render } from './test-utils'
import App from './app'
import { describe, expect, it, vi } from 'vitest'
import React from 'react'
import Button from './Button'
import { waitFor } from '@testing-library/react'

const MyMock2 = {getOsData: async () => { os: 'xos'}}
vi.stubGlobal('preloadApiThing', MyMock2)

describe('Window Functions', () => {
  it('Should render (Button)', async () => {
    render(
        <Button />
    )
  })
  
  it('Should render (App)', async () => {
    render(
        <App />
    )
    waitFor(() => expect(document.body.innerHTML).toContain('os data: {"os":"xos"}'));
  })
});


