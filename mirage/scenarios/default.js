export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  server.create('item', { purchasingChannelCode: 0 });
  server.create('item', {
    purchasingChannelCode: 1,
    title: 'Ninja\u2122 Professional Blender with Single Serve Blending Cups - Only Online',
    promotions: undefined
  });
  server.create('item', {
    purchasingChannelCode: 2,
    title: 'Ninja\u2122 Professional Blender with Single Serve Blending Cups - Only In Store',
    promotions: [
      {
        "Description": [
          {
            // eslint-disable-next-line max-len
            "legalDisclaimer": "Offer available online only. Offer applies to purchases of $50 or more of eligible items across all categories. Look for the &quot;SPEND $50: SHIPS FREE&quot; logo on eligible items. Some exclusions apply. Items that are not eligible are subject to shipping charges. $50 purchase is based on eligible merchandise subtotal. Items that are not eligible, GiftCards, e-GiftCards, gift wrap, tax and shipping and handling charges will not be included in determining merchandise subtotal. Offer valid for orders shipping within the 48 contiguous states, as well as APO\/FPO and for Standard and To the Door shipping methods only. Not valid on previous orders.",
            "shortDescription": "SPEND $50, GET FREE SHIPPING"
          }
        ],
        "endDate": "2016-12-25 06:59:00.001",
        "promotionIdentifier": "10736506",
        "promotionType": "Buy catalog entries from category X, get shipping at a fixed price",
        "startDate": "2014-05-18 07:00:00.001"
      }
    ]
  });
}
