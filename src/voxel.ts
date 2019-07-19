export enum VoxelType {
    DIRT
}
export class Voxel {
    constructor(
        public type: VoxelType,
        public active = false
    ) {}
}
