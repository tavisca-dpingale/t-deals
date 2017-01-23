# t-home-page-deal

### Component Signature

```html

    <t-home-page-deal heading="EXPLORE POPULAR DESTINATION" 
                      flip-color='white'
                      
                      data=[[data]] >
    </t-home-page-deal>

```

### Component Attributes

```javascript
    //options
    data = [
        {
            category : "CITY & SHOPPING",
            deals : [
                {
                    headerText : "MIAMI",
                    subHeaderText : "UNITED STATE",

                    footerText : "$54",
                    subFooterText : "from",

                    desc : 'deal - description',
                    
                    // position between 1 to 16
                    position : 1,
                    // column wrap count
                    colSpan : 1,

                    rowSpan : 1,
                    
                    redirectUrl : 'redirect-url',
                    viewDetailsButtonText : "View Details",
                    viewDetailsButtonColor : 'Orange',

                    imageUrl : "http://example.com/ad.png"
                }
            ]
        }
    ];


```

## Test Cases

-
