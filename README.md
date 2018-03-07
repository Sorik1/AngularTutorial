The above configuration will generate claims (`OpowerClaims`) for you or you may pass claims properties in the request parameters:

|Request parameter|Example value|
|:--:|---|
|jti|ef2805fb-ebad-4ad9-915f-c39e62c262d0|
|eti|a66d15db-81ce-47d7-a98d-6604951b3933|
|ett|CUSTOMER|
|tnt|UTIL|

In case you are interested in `DssClaims` you should pass "DSSaccountId" as one of the request parameters. List of all DSS specific parameters:
|Request parameter|Example value|
|:--:|---|
|DSSaccountId|89132748912374981237|
|DSSuserId|550e8400-e29b-41d4-a716-446655440000|
|DSSpersonId|32847123089471208|
|DSSpremiseId|43284701283741234|
