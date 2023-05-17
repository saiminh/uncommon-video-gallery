import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save({
      className: `uncommon-video-gallery ${attributes.layout}`,
    }) }>
      <div className='uncommon-video-gallery-inner'>
        <InnerBlocks.Content />
      </div>
		</div>
	);
}
