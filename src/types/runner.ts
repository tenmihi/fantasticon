import { CodepointsMap } from '../utils/codepoints';
import { FontAssetType, OtherAssetType, AssetType } from './misc';
import { FormatOptions } from './format';

export interface RunnerMandatoryOptions {
  inputDir: string;
  outputDir: string;
}

export type RunnerOptionalOptions = {
  name: string;
  fontTypes: FontAssetType[];
  assetTypes: OtherAssetType[];
  formatOptions: FormatOptions;
  pathOptions: { [key in AssetType]?: string };
  codepoints: CodepointsMap;
  fontHeight: number;
  descent: number;
  normalize: boolean;
  round: number;
  selector: string;
  tag: string;
  templates: { [key in OtherAssetType]?: string };
  prefix: string;
  fontsUrl: string;
  startCodepoint: number;
};

export type RunnerOptionsInput = RunnerMandatoryOptions &
  Partial<RunnerOptionalOptions>;

export type RunnerOptions = RunnerMandatoryOptions &
  Partial<RunnerOptionalOptions>;
