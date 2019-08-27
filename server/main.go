package server

import (
	"github.com/aymandev/korekuta/server/src/database"
	userRoutes "github.com/aymandev/korekuta/server/src/routes/user"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	korekutaDb := database.LoadDatabase()
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./client/build", true)))

	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "test",
			})
		})
		apiUser := api.Group("/user")
		{
			apiUser.POST("/register", userRoutes.RegisterRoute)
			apiUser.POST("/auth", userRoutes.AuthRoute)
		}
	}

	_ = router.Run(":5000")
}
