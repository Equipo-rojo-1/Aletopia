import { render } from '@testing-library/react';

import CommonAssests from '../../common-assests';

describe('CommonAssests', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonAssests />);
    expect(baseElement).toBeTruthy();
  });
});
