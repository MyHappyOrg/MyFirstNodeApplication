#Environment Variable
#CTP_PROJECT_KEY    = "<<CTP_PROJECT_KEY>>"
#CTP_CLIENT_ID      = "<<CTP_CLIENT_ID>>"
#CTP_CLIENT_SECRET  = "<<CTP_CLIENT_SECRET>>"
#CTP_AUTH_URL       = "https://auth.commercetools.co"
#CTP_API_URL        = "https://api.commercetools.co"
#TF_LOG             = 1
#CTP_DEBUG          = 1

resource "commercetools_channel" "project" {
  key   = "20202020"
  roles = ["ProductDistribution"]
  name = {
      en = "Channel-name"
  }
  description = {
      en = "Channel-description"
  }
}

resource "commercetools_project_settings" "project" {}