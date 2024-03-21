"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const otakudesu_controller_1 = __importDefault(require("../controller/otakudesu.controller"));
const OtakudesuRouter = express_1.default.Router();
OtakudesuRouter.get("/otakudesu", otakudesu_controller_1.default.getMessage);
OtakudesuRouter.get("/otakudesu/home", otakudesu_controller_1.default.getHome);
OtakudesuRouter.get("/otakudesu/completed", otakudesu_controller_1.default.getCompleted);
OtakudesuRouter.get("/otakudesu/ongoing", otakudesu_controller_1.default.getOnGoing);
OtakudesuRouter.get("/otakudesu/search", otakudesu_controller_1.default.getSearch);
OtakudesuRouter.get("/otakudesu/jadwal", otakudesu_controller_1.default.getJadwalRilis);
OtakudesuRouter.get("/otakudesu/genres", otakudesu_controller_1.default.getGenreList);
OtakudesuRouter.get("/otakudesu/genres/:slug", otakudesu_controller_1.default.getAnimeListByGenre);
OtakudesuRouter.get("/otakudesu/anime", otakudesu_controller_1.default.getAnimeList);
OtakudesuRouter.get("/otakudesu/anime/:slug", otakudesu_controller_1.default.getAnimeDetail);
OtakudesuRouter.get("/otakudesu/episode/:slug", otakudesu_controller_1.default.getAnimeByEpisode);
OtakudesuRouter.get("/otakudesu/batch/:slug", otakudesu_controller_1.default.getBatch);
exports.default = OtakudesuRouter;
//# sourceMappingURL=otakudesu.routes.js.map