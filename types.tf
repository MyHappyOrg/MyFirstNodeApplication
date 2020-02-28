resource "commercetools_type" "discount_code_custom_type" {
  key = "discount_code_custom_type"
  name = {
    en = "Custom Type definition for DiscountCode"
  }
  description = {
    en = "Custom Type definition for DiscountCode"
  }

  resource_type_ids = ["discount-code"]

  field {
    name = "image_url"
    label = {
      en = "CDN Image URL"
    }
    type {
      name = "String"
    }
    required = false
    inputHint = "SingleLine"
  }