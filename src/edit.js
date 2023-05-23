import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps({
      className: `uncommon-video-gallery ${attributes.layout}`,
    }) }>
      <div class="label">
        Define a poster image for each video in the right sidebar. <br/>
        Otherwise the first frame of the video will be displayed.
      </div>
      <InspectorControls key="setting">
        <SelectControl
          label="Layout"
          value={ attributes.layout }
          options={[
            { label: 'Normal', value: 'normal' },
            { label: 'negative top margin', value: 'negative-top-margin' },
          ]}
          onChange={ ( layout ) => setAttributes( { layout } ) }
        />
      </InspectorControls>
      <div className='uncommon-video-gallery-inner'>
        <InnerBlocks
          allowedBlocks={['core/video']}
          template={[
            ['core/video', {}],
            ['core/video', {}],
            ['core/video', {}],
            ['core/video', {}]
          ]}
        />
      </div>
		</div>
	);
}
