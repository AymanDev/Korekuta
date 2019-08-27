package database

import (
	dbTypes "github.com/aymandev/korekuta/server/src/database/models"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type KorekutaDatabase struct {
	Db  *gorm.DB
	err error
}

func LoadDatabase() *KorekutaDatabase {
	db, err := gorm.Open("postgres")

	if err != nil {
		panic("failed to connect database")
	}

	// Auto-migration
	db.AutoMigrate(&dbTypes.User{})

	return &KorekutaDatabase{
		Db:  db,
		err: err,
	}
}
