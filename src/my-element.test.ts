import { expect, fixture } from '@open-wc/testing';
import {MyDemoElement} from '@my-test/components';
import { html } from 'lit';

describe('demo-element', () => {
    let element : MyDemoElement;
    
	beforeEach(async () => {
		element = await fixture(html`
            <my-demo>
            </my-demo>
            `);
	});

	it('should be defined', () => {
        
		expect(element).to.be.instanceOf(MyDemoElement);
	});

});
