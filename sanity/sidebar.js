import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Build custom sidebar
export default function Sidebar() {
  return S.list()
    .title("Slick's Slices")
    .items([
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🔥</strong>)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),

      // Add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
