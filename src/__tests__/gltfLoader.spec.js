import { GLTFLoader } from '../gltfLoader';

describe(GLTFLoader, () => {
  it('should construct a loader', () => {
    const loader = new GLTFLoader();
    expect(loader).not.toBeUndefined();
  });
});
