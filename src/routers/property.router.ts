import  { Router } from 'express';
import { PropertyController } from '../controllers/property.controller';

const router = Router();

router.get("/seed", (req, res) => {
    PropertyController.propertySeed(req, res);
});

router.post("/register", (req, res) => {
    PropertyController.registerProperty(req, res);
})

router.get("/", (req, res) => {
    PropertyController.getAllProperties(req, res);
});

router.get("/tags", (req, res) => {
    PropertyController.getAllTags(req, res);
})

router.get("/id/:idSearched", (req, res) => {
    PropertyController.getPropertyByID(req, res);
})

router.get("/address/:addressSearched", (req, res) => {
    PropertyController.getPropertiesByAddress(req, res);
});

router.get("/tag/:tagSearched", (req, res) => {
    PropertyController.getPropertiesByTag(req, res);
});

router.get("/minimunPrice/:minimunPrice", (req, res) => {
    PropertyController.getPropertiesByMinimumPrice(req, res);
});

router.get("/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByMaximumPrice(req, res);
});

router.get("/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByBedrooms(req, res);
});

router.get("/address/:addressSearched/tag/:tagSearched", (req, res) => {
    PropertyController.getPropertiesByAddressAndTag(req, res);
});

router.get("/address/:addressSearched/minimunPrice/:minimunPrice", (req, res) => {
    PropertyController.getPropertiesByAddressAndMinimunPrice(req, res);
});

router.get("/address/:addressSearched/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByAddressAndMaximunPrice(req, res);
});

router.get("/address/:addressSearched/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByAddressAndBedrooms(req, res);
});

router.get("/tag/:tagSearched/minimunPrice/:minimunPrice", (req, res) => {
    PropertyController.getPropertiesByTagAndMinimunPrice(req, res);
});

router.get("/tag/:tagSearched/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByTagAndMaximunPrice(req, res);
});

router.get("/tag/:tagSearched/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByTagAndBedrooms(req, res);
});

router.get("/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByPriceRange(req, res);
});

router.get("/minimunPrice/:minimunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByMinimunPriceAndBedrooms(req, res);
});

router.get("/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByMaximunPriceAndBedrooms(req, res);
});

router.get("/address/:addressSearched/tag/:tagSearched/minimunPrice/:minimunPrice", (req, res) => {
    PropertyController.getPropertiesByAddressTagAndMinimunPrice(req, res);
});

router.get("/address/:addressSearched/tag/:tagSearched/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByAddressTagAndMaximunPrice(req, res);
});

router.get("/address/:addressSearched/tag/:tagSearched/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByAddressTagAndBedrooms(req, res);
});

router.get("/address/:addressSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByAddressAndPriceRange(req, res);
});

router.get("/address/:addressSearched/minimunPrice/:minimunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByAddressMinimunPriceAndBedrooms(req, res);
});

router.get("/address/:addressSearched/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByAddressMaximunPriceAndBedrooms(req, res);
});

router.get("/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByTagAndPriceRange(req, res);
});

router.get("/tag/:tagSearched/minimunPrice/:minimunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByTagMinimunPriceAndBedrooms(req, res);
});

router.get("/tag/:tagSearched/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByTagMaximunPriceAndBedrooms(req, res);
});

router.get("/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByPriceRangeAndBedrooms(req, res);
});

router.get("/address/:addressSearched/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice", (req, res) => {
    PropertyController.getPropertiesByAddressTagAndPriceRange(req, res);
});

router.get("/address/:addressSearched/tag/:tagSearched/minimunPrice/:minimunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByAddressTagMinimunPriceAndBedrooms(req, res);
});

router.get("/address/:addressSearched/tag/:tagSearched/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByAddressTagMaximunPriceAndBedrooms(req, res);
});

router.get("/address/:addressSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByAddressPriceRangeAndBedrooms(req, res);
});

router.get("/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByTagPriceRangeAndBedrooms(req, res);
});

router.get("/address/:addressSearched/tag/:tagSearched/minimunPrice/:minimunPrice/maximunPrice/:maximunPrice/numberOfBedrooms/:numberOfBedrooms", (req, res) => {
    PropertyController.getPropertiesByAddressTagPriceRangeAndBedrooms(req, res);
});

export default router;